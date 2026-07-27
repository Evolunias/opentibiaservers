import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-south-america-servers');
}

export default function TibiaretroSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-south-america-servers" />;
}
