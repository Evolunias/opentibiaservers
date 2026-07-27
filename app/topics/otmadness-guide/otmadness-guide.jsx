import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-guide');
}

export default function OtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="otmadness-guide" />;
}
