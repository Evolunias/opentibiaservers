import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-pvp-enforced-server');
}

export default function Tibiame74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-pvp-enforced-server" />;
}
