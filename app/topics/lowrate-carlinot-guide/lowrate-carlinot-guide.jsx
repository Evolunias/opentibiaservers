import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-guide');
}

export default function LowrateCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-guide" />;
}
