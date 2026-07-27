import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-guide');
}

export default function CustomEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-guide" />;
}
