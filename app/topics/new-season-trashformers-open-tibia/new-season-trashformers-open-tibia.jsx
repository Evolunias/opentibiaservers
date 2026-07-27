import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-open-tibia');
}

export default function NewSeasonTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-open-tibia" />;
}
