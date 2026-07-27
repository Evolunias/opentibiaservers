import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-brazil');
}

export default function TrashformersPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-brazil" />;
}
