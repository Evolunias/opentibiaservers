import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-with-trainers-server');
}

export default function Thornia13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-with-trainers-server" />;
}
