import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-with-trainers-server');
}

export default function Realesta12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-with-trainers-server" />;
}
