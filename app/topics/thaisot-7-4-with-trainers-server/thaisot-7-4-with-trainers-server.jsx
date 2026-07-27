import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-with-trainers-server');
}

export default function Thaisot74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-with-trainers-server" />;
}
