import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-with-trainers-server');
}

export default function Thaisot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-with-trainers-server" />;
}
