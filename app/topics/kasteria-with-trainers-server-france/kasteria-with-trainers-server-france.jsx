import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-france');
}

export default function KasteriaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-france" />;
}
