import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-tibia');
}

export default function BestTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-tibia" />;
}
