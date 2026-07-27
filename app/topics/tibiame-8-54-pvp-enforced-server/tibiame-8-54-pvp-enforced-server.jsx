import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-pvp-enforced-server');
}

export default function Tibiame854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-pvp-enforced-server" />;
}
