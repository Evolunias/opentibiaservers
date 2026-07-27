import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-guide');
}

export default function TopEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-guide" />;
}
