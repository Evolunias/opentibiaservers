import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-guide');
}

export default function NewEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-guide" />;
}
