import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-guide');
}

export default function BestBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-guide" />;
}
