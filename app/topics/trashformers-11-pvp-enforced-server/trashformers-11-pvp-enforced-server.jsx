import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-pvp-enforced-server');
}

export default function Trashformers11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-pvp-enforced-server" />;
}
