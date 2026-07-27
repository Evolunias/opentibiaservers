import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-with-trainers-server');
}

export default function Trashformers11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-with-trainers-server" />;
}
