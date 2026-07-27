import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-south-america-server');
}

export default function TibiaretroSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-south-america-server" />;
}
