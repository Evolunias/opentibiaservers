import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-brazil');
}

export default function RubinotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-brazil" />;
}
