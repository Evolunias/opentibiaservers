import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-france');
}

export default function NostaltherWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-france" />;
}
