import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-guide');
}

export default function ActiveMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-guide" />;
}
