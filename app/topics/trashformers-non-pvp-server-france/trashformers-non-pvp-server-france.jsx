import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-france');
}

export default function TrashformersNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-france" />;
}
