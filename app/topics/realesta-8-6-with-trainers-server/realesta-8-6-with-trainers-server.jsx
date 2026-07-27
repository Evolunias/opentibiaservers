import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-with-trainers-server');
}

export default function Realesta86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-with-trainers-server" />;
}
