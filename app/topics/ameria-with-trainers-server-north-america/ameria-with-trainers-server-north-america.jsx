import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-north-america');
}

export default function AmeriaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-north-america" />;
}
