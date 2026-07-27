import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-pvp-enforced-server');
}

export default function Tibiara15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-pvp-enforced-server" />;
}
