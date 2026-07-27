import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-with-trainers-server');
}

export default function Thornia96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-with-trainers-server" />;
}
