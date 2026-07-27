import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-with-trainers-server');
}

export default function Medivia96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-with-trainers-server" />;
}
