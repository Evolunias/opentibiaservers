import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-tibia');
}

export default function FreshStartTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-tibia" />;
}
