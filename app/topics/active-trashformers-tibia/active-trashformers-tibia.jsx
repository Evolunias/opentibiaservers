import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-tibia');
}

export default function ActiveTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-tibia" />;
}
