import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-france');
}

export default function AmeriaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-france" />;
}
