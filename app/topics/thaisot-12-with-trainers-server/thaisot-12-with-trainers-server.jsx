import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-with-trainers-server');
}

export default function Thaisot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-with-trainers-server" />;
}
