import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-canada');
}

export default function TibiameWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-canada" />;
}
