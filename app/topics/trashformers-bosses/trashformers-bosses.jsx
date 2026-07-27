import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-bosses');
}

export default function TrashformersBossesKeywordPage() {
  return <StaticKeywordPage slug="trashformers-bosses" />;
}
