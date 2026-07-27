import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-pvp-enforced-server');
}

export default function Tibiame81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-pvp-enforced-server" />;
}
