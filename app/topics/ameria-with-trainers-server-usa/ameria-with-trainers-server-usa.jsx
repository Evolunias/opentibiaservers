import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-usa');
}

export default function AmeriaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-usa" />;
}
