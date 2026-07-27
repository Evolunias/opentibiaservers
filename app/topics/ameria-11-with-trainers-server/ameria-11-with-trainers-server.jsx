import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-with-trainers-server');
}

export default function Ameria11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-with-trainers-server" />;
}
