import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp');
}

export default function TrashformersPvpKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp" />;
}
