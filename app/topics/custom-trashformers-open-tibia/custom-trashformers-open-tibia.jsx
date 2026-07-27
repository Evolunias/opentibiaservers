import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-open-tibia');
}

export default function CustomTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-open-tibia" />;
}
