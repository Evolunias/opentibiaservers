import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-guide');
}

export default function NewCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-guide" />;
}
