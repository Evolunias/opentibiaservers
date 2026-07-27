import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-with-trainers-server');
}

export default function Trashformers12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-with-trainers-server" />;
}
