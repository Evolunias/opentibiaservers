import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-france');
}

export default function NepreniaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-france" />;
}
