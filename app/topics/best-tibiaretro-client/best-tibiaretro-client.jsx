import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-client');
}

export default function BestTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-client" />;
}
