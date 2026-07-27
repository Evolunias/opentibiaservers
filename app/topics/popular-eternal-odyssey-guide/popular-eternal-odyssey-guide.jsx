import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-guide');
}

export default function PopularEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-guide" />;
}
