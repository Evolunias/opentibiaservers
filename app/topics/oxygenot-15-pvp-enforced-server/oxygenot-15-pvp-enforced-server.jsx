import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-pvp-enforced-server');
}

export default function Oxygenot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-pvp-enforced-server" />;
}
