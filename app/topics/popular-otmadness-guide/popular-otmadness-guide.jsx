import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-guide');
}

export default function PopularOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-guide" />;
}
