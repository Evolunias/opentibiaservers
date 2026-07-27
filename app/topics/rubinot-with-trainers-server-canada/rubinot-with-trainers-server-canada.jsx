import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-canada');
}

export default function RubinotWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-canada" />;
}
