import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-latin-america');
}

export default function AmeriaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-latin-america" />;
}
