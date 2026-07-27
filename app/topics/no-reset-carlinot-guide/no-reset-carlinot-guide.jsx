import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-guide');
}

export default function NoResetCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-guide" />;
}
