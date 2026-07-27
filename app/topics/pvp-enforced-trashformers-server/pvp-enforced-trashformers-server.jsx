import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-trashformers-server');
}

export default function PvpEnforcedTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-trashformers-server" />;
}
