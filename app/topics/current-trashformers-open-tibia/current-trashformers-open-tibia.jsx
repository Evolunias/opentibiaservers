import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-open-tibia');
}

export default function CurrentTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-open-tibia" />;
}
