import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-with-trainers-server');
}

export default function Thaisot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-with-trainers-server" />;
}
