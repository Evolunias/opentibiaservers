import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-with-trainers-server');
}

export default function Ameria13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-with-trainers-server" />;
}
