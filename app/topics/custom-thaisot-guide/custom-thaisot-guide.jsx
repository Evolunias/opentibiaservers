import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-guide');
}

export default function CustomThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-guide" />;
}
