import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-with-trainers-server');
}

export default function Realesta11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-with-trainers-server" />;
}
