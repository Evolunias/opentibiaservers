import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-pvp-enforced-server');
}

export default function Blazera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-pvp-enforced-server" />;
}
