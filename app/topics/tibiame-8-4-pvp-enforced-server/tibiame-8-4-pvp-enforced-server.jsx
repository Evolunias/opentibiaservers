import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-pvp-enforced-server');
}

export default function Tibiame84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-pvp-enforced-server" />;
}
