import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-with-trainers-server');
}

export default function Marolaot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-with-trainers-server" />;
}
