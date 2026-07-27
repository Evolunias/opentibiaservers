import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-training');
}

export default function CarlinotTrainingKeywordPage() {
  return <StaticKeywordPage slug="carlinot-training" />;
}
