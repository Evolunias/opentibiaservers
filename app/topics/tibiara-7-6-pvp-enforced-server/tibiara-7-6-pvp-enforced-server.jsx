import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-pvp-enforced-server');
}

export default function Tibiara76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-pvp-enforced-server" />;
}
