import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-guide');
}

export default function BestMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-guide" />;
}
