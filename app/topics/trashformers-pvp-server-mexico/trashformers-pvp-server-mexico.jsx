import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-mexico');
}

export default function TrashformersPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-mexico" />;
}
