import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-pvp-enforced-server');
}

export default function Blazera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-pvp-enforced-server" />;
}
