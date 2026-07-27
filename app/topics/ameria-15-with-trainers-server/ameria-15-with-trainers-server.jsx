import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-with-trainers-server');
}

export default function Ameria15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-with-trainers-server" />;
}
