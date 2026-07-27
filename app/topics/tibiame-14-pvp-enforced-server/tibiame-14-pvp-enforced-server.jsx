import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-pvp-enforced-server');
}

export default function Tibiame14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-pvp-enforced-server" />;
}
