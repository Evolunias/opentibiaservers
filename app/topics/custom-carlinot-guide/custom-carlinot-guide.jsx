import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-guide');
}

export default function CustomCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-guide" />;
}
