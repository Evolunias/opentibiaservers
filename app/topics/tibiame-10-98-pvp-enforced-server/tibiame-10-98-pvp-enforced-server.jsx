import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-pvp-enforced-server');
}

export default function Tibiame1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-pvp-enforced-server" />;
}
