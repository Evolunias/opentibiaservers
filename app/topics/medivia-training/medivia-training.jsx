import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-training');
}

export default function MediviaTrainingKeywordPage() {
  return <StaticKeywordPage slug="medivia-training" />;
}
