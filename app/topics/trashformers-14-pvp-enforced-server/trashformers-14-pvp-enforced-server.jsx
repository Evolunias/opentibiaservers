import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-pvp-enforced-server');
}

export default function Trashformers14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-pvp-enforced-server" />;
}
