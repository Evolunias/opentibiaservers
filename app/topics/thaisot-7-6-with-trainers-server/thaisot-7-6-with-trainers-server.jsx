import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-with-trainers-server');
}

export default function Thaisot76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-with-trainers-server" />;
}
