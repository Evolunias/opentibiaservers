import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-tibia');
}

export default function PopularTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-tibia" />;
}
