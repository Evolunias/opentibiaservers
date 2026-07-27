import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-with-trainers-server');
}

export default function Medivia71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-with-trainers-server" />;
}
