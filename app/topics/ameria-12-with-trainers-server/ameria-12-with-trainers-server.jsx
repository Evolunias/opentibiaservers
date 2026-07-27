import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-with-trainers-server');
}

export default function Ameria12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-with-trainers-server" />;
}
