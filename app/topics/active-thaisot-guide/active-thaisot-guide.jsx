import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-guide');
}

export default function ActiveThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-guide" />;
}
