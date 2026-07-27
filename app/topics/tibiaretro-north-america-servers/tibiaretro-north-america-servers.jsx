import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-north-america-servers');
}

export default function TibiaretroNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-north-america-servers" />;
}
