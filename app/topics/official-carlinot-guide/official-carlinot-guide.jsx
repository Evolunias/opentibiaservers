import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-guide');
}

export default function OfficialCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-guide" />;
}
