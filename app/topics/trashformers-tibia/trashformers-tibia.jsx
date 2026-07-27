import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-tibia');
}

export default function TrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-tibia" />;
}
