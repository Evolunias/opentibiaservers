import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-training');
}

export default function CalmeraOtTrainingKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-training" />;
}
