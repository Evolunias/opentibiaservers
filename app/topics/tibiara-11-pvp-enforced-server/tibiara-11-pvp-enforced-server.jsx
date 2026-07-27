import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-pvp-enforced-server');
}

export default function Tibiara11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-pvp-enforced-server" />;
}
