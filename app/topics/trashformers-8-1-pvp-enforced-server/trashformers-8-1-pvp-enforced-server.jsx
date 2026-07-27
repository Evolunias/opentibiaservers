import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-pvp-enforced-server');
}

export default function Trashformers81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-pvp-enforced-server" />;
}
