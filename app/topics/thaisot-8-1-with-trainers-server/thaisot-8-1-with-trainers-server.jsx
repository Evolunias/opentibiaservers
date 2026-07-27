import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-with-trainers-server');
}

export default function Thaisot81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-with-trainers-server" />;
}
