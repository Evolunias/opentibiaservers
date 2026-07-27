import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-guide');
}

export default function CustomMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-guide" />;
}
