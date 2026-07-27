import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-trainers-server-latin-america');
}

export default function MadnessaliveWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-trainers-server-latin-america" />;
}
