import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-with-trainers-server');
}

export default function Marolaot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-with-trainers-server" />;
}
