import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-pvp-enforced-server');
}

export default function Oxygenot81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-pvp-enforced-server" />;
}
