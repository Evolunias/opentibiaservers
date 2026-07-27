import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-brazil');
}

export default function TrashformersNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-brazil" />;
}
