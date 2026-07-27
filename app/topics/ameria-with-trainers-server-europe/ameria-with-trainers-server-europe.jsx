import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-europe');
}

export default function AmeriaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-europe" />;
}
