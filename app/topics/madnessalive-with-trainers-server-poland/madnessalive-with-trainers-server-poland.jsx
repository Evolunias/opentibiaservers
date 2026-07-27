import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-poland');
}

export default function MadnessaliveWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-poland" />;
}
