import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-with-trainers-server');
}

export default function Medivia11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-with-trainers-server" />;
}
