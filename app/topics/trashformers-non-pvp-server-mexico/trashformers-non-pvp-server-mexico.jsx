import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-mexico');
}

export default function TrashformersNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-mexico" />;
}
