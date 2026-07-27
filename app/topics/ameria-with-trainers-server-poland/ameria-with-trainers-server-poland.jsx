import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-poland');
}

export default function AmeriaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-poland" />;
}
