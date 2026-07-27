import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-with-trainers-server');
}

export default function Ameria14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-with-trainers-server" />;
}
