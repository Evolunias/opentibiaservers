import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-with-trainers-server');
}

export default function Ameria71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-with-trainers-server" />;
}
