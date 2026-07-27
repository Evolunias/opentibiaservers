import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-pvp-enforced-server');
}

export default function Tibiame15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-pvp-enforced-server" />;
}
