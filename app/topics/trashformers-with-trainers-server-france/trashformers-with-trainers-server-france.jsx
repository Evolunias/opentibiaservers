import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-trainers-server-france');
}

export default function TrashformersWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-trainers-server-france" />;
}
