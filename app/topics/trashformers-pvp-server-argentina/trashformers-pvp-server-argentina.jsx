import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-argentina');
}

export default function TrashformersPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-argentina" />;
}
