import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-guide');
}

export default function BestTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-guide" />;
}
