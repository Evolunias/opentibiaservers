import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-with-trainers-server');
}

export default function Medivia772WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-with-trainers-server" />;
}
