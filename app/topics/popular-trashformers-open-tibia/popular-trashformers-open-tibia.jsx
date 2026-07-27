import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-open-tibia');
}

export default function PopularTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-open-tibia" />;
}
