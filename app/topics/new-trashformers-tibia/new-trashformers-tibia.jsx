import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-tibia');
}

export default function NewTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-tibia" />;
}
