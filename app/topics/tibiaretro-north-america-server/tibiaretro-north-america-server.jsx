import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-north-america-server');
}

export default function TibiaretroNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-north-america-server" />;
}
