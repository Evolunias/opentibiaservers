import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-open-tibia');
}

export default function TopTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-open-tibia" />;
}
