import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-canada');
}

export default function TrashformersPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-canada" />;
}
