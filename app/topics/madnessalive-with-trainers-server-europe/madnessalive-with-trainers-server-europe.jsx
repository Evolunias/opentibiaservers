import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-europe');
}

export default function MadnessaliveWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-europe" />;
}
