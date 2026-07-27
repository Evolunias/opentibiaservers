import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-with-trainers-server');
}

export default function Realesta74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-with-trainers-server" />;
}
