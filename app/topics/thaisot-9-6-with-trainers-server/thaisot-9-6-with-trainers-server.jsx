import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-with-trainers-server');
}

export default function Thaisot96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-with-trainers-server" />;
}
