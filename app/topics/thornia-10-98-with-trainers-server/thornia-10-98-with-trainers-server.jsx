import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-with-trainers-server');
}

export default function Thornia1098WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-with-trainers-server" />;
}
