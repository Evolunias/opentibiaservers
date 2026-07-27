import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-trainers-server-north-america');
}

export default function TrashformersWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-trainers-server-north-america" />;
}
