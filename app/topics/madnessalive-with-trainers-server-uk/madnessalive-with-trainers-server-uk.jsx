import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-uk');
}

export default function MadnessaliveWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-uk" />;
}
