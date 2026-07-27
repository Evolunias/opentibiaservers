import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-training');
}

export default function OtmadnessTrainingKeywordPage() {
  return <StaticKeywordPage slug="otmadness-training" />;
}
