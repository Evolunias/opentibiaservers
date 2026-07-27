import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-pvp-enforced-server');
}

export default function Evolera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-pvp-enforced-server" />;
}
