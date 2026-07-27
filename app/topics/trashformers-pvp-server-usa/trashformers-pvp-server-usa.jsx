import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-usa');
}

export default function TrashformersPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-usa" />;
}
