import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-with-trainers-server');
}

export default function Trashformers13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-with-trainers-server" />;
}
