import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-sweden');
}

export default function RubinotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-sweden" />;
}
