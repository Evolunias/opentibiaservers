import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-tibia');
}

export default function CurrentTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-tibia" />;
}
