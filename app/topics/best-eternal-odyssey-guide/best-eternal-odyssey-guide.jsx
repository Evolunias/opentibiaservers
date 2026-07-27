import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-guide');
}

export default function BestEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-guide" />;
}
