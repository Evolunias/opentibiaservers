import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-training');
}

export default function RubinotTrainingKeywordPage() {
  return <StaticKeywordPage slug="rubinot-training" />;
}
