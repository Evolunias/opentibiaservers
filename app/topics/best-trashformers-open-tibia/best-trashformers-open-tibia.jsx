import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-open-tibia');
}

export default function BestTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-open-tibia" />;
}
