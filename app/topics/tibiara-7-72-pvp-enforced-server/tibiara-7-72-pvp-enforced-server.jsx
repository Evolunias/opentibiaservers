import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-pvp-enforced-server');
}

export default function Tibiara772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-pvp-enforced-server" />;
}
