import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-with-trainers-server');
}

export default function Realesta13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-with-trainers-server" />;
}
