import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-with-trainers-server');
}

export default function Madnessalive15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-with-trainers-server" />;
}
