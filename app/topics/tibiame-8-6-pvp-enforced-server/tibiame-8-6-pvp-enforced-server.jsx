import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-pvp-enforced-server');
}

export default function Tibiame86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-pvp-enforced-server" />;
}
