import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-guide');
}

export default function LowrateEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-guide" />;
}
