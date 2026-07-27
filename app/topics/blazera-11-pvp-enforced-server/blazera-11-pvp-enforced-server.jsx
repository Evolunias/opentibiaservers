import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-pvp-enforced-server');
}

export default function Blazera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-pvp-enforced-server" />;
}
