import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-south-america');
}

export default function AmeriaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-south-america" />;
}
