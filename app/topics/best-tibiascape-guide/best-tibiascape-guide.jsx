import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-guide');
}

export default function BestTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-guide" />;
}
