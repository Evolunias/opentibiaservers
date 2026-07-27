import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-pvp-enforced-server');
}

export default function Blazera81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-pvp-enforced-server" />;
}
