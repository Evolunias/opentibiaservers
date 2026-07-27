import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro');
}

export default function BestTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro" />;
}
