import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-poland');
}

export default function RubinotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-poland" />;
}
