import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-sweden');
}

export default function MadnessaliveWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-sweden" />;
}
