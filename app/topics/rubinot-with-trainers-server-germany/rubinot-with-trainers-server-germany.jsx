import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-germany');
}

export default function RubinotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-germany" />;
}
