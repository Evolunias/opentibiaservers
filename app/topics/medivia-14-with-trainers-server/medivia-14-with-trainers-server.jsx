import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-with-trainers-server');
}

export default function Medivia14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-with-trainers-server" />;
}
