import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-with-trainers-server');
}

export default function Realesta71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-with-trainers-server" />;
}
