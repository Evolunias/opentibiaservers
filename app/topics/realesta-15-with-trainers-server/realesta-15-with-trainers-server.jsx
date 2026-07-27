import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-with-trainers-server');
}

export default function Realesta15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-with-trainers-server" />;
}
