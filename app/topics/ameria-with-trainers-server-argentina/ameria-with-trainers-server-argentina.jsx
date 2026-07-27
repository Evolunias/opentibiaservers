import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-argentina');
}

export default function AmeriaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-argentina" />;
}
