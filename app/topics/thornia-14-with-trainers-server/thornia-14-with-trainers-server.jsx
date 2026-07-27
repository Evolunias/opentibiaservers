import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-with-trainers-server');
}

export default function Thornia14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-with-trainers-server" />;
}
