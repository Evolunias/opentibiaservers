import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-pvp-enforced-server');
}

export default function Oxygenot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-pvp-enforced-server" />;
}
