import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-guide');
}

export default function OfficialOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-guide" />;
}
