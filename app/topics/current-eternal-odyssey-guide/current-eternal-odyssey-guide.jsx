import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-guide');
}

export default function CurrentEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-guide" />;
}
