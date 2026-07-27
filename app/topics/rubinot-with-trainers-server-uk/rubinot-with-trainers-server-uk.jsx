import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-uk');
}

export default function RubinotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-uk" />;
}
