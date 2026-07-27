import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-mexico');
}

export default function AmeriaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-mexico" />;
}
