import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-tibia');
}

export default function NewSeasonTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-tibia" />;
}
