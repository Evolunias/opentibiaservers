import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-pvp-enforced-server');
}

export default function Trashformers15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-pvp-enforced-server" />;
}
