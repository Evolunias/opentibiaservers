import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-pvp-enforced-server');
}

export default function Trashformers12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-pvp-enforced-server" />;
}
