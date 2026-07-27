import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-pvp-enforced-server');
}

export default function Trashformers13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-pvp-enforced-server" />;
}
