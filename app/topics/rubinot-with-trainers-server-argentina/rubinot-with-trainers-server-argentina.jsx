import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-argentina');
}

export default function RubinotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-argentina" />;
}
