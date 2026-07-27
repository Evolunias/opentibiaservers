import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-training');
}

export default function HarmoniaOtTrainingKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-training" />;
}
