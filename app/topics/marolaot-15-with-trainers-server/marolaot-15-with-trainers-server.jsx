import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-with-trainers-server');
}

export default function Marolaot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-with-trainers-server" />;
}
