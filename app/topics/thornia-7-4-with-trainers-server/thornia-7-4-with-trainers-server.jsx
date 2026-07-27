import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-with-trainers-server');
}

export default function Thornia74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-with-trainers-server" />;
}
