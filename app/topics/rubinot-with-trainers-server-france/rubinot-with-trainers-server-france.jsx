import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-france');
}

export default function RubinotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-france" />;
}
