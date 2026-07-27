import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-open-tibia');
}

export default function NewTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-open-tibia" />;
}
