import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eternal-odyssey-guide');
}

export default function OldSchoolEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-eternal-odyssey-guide" />;
}
