import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-with-trainers-server');
}

export default function Medivia100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-with-trainers-server" />;
}
