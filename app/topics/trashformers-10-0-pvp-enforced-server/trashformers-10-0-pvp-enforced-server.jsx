import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-pvp-enforced-server');
}

export default function Trashformers100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-pvp-enforced-server" />;
}
