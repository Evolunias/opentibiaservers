import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-guide');
}

export default function NewOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-guide" />;
}
