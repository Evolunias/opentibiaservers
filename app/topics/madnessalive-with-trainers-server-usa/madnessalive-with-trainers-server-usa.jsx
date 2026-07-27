import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-usa');
}

export default function MadnessaliveWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-usa" />;
}
