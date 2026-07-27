import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-with-trainers-server');
}

export default function Thornia772WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-with-trainers-server" />;
}
