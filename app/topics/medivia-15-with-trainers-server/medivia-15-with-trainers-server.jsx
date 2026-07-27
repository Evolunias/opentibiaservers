import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-with-trainers-server');
}

export default function Medivia15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-with-trainers-server" />;
}
