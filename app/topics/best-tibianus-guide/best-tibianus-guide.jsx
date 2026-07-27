import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-guide');
}

export default function BestTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-guide" />;
}
