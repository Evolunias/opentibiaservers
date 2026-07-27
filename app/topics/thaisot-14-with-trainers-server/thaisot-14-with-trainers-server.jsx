import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-with-trainers-server');
}

export default function Thaisot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-with-trainers-server" />;
}
