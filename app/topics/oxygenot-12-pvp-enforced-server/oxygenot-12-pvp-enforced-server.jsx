import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-pvp-enforced-server');
}

export default function Oxygenot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-pvp-enforced-server" />;
}
