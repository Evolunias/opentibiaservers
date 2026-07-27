import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-with-trainers-server');
}

export default function Medivia12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-with-trainers-server" />;
}
