import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-guide');
}

export default function FreshStartEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-guide" />;
}
