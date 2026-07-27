import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-argentina');
}

export default function TrashformersNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-argentina" />;
}
