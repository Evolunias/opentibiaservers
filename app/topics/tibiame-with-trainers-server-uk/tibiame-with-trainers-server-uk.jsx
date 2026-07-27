import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-uk');
}

export default function TibiameWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-uk" />;
}
