import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-france');
}

export default function NtoStarWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-france" />;
}
