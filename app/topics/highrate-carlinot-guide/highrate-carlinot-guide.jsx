import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-guide');
}

export default function HighrateCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-guide" />;
}
