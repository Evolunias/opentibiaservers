import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-trashformers-server');
}

export default function NonPvpTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-trashformers-server" />;
}
