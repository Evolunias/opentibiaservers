import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-sweden');
}

export default function MarolaotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-sweden" />;
}
