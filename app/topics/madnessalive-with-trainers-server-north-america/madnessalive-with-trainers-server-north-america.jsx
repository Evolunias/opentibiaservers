import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-north-america');
}

export default function MadnessaliveWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-north-america" />;
}
