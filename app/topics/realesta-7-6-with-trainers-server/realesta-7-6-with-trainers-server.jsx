import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-with-trainers-server');
}

export default function Realesta76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-with-trainers-server" />;
}
