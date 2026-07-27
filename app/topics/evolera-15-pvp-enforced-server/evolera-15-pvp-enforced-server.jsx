import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-pvp-enforced-server');
}

export default function Evolera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-pvp-enforced-server" />;
}
