import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-guide');
}

export default function PopularMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-guide" />;
}
