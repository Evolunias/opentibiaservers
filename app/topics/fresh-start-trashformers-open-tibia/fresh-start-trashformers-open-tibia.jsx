import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-open-tibia');
}

export default function FreshStartTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-open-tibia" />;
}
