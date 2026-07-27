import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-54-pvp-enforced-server');
}

export default function Tibiara854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-54-pvp-enforced-server" />;
}
