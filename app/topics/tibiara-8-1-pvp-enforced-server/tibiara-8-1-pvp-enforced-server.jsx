import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-pvp-enforced-server');
}

export default function Tibiara81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-pvp-enforced-server" />;
}
