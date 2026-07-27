import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-with-trainers-server');
}

export default function Ameria86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-with-trainers-server" />;
}
