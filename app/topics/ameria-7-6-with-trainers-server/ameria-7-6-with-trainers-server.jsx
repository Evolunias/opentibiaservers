import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-with-trainers-server');
}

export default function Ameria76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-with-trainers-server" />;
}
