import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-with-trainers-server');
}

export default function Thaisot100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-with-trainers-server" />;
}
