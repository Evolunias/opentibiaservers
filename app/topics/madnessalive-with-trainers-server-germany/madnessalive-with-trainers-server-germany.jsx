import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-germany');
}

export default function MadnessaliveWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-germany" />;
}
