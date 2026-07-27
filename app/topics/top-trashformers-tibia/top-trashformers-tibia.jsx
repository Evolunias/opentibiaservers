import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-tibia');
}

export default function TopTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-tibia" />;
}
