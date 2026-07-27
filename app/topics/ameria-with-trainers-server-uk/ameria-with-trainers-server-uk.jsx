import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-uk');
}

export default function AmeriaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-uk" />;
}
