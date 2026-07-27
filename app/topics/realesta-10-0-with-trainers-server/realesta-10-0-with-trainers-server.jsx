import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-with-trainers-server');
}

export default function Realesta100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-with-trainers-server" />;
}
