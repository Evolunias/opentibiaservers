import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-france');
}

export default function TibiameWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-france" />;
}
