import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-with-trainers-server');
}

export default function Realesta84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-with-trainers-server" />;
}
