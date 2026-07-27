import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-guide');
}

export default function ActiveEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-guide" />;
}
