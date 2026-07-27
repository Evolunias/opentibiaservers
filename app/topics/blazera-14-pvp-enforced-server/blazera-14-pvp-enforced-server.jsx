import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-pvp-enforced-server');
}

export default function Blazera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-pvp-enforced-server" />;
}
