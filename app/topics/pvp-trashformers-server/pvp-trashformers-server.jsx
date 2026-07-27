import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-trashformers-server');
}

export default function PvpTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-trashformers-server" />;
}
