import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-tibia');
}

export default function CustomTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-tibia" />;
}
