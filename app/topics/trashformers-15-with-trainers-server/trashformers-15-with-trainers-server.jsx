import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-with-trainers-server');
}

export default function Trashformers15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-with-trainers-server" />;
}
