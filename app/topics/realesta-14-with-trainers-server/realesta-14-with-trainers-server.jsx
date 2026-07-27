import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-with-trainers-server');
}

export default function Realesta14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-with-trainers-server" />;
}
