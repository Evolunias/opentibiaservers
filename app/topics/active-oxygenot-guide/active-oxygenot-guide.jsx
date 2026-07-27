import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-guide');
}

export default function ActiveOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-guide" />;
}
