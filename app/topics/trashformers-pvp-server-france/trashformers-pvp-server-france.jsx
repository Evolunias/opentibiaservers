import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-france');
}

export default function TrashformersPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-france" />;
}
