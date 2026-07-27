import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-pvp-enforced-server');
}

export default function Tibiara100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-pvp-enforced-server" />;
}
