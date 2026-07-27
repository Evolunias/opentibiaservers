import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-canada');
}

export default function AmeriaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-canada" />;
}
