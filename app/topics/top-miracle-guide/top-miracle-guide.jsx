import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-guide');
}

export default function TopMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-guide" />;
}
