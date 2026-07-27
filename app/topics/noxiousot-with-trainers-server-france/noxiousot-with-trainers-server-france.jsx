import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-trainers-server-france');
}

export default function NoxiousotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-trainers-server-france" />;
}
