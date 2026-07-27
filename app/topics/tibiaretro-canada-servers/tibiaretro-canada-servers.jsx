import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-canada-servers');
}

export default function TibiaretroCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-canada-servers" />;
}
