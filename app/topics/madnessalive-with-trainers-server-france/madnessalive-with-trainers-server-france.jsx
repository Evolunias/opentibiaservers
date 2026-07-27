import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-france');
}

export default function MadnessaliveWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-france" />;
}
