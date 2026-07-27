import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-sweden');
}

export default function CarlinotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-sweden" />;
}
