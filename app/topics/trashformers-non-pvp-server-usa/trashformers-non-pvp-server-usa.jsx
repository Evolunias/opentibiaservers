import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-usa');
}

export default function TrashformersNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-usa" />;
}
