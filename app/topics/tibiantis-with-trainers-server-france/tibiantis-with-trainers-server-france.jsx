import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-france');
}

export default function TibiantisWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-france" />;
}
