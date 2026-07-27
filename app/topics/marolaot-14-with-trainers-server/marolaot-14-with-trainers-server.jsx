import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-with-trainers-server');
}

export default function Marolaot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-with-trainers-server" />;
}
