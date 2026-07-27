import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-pvp-enforced-server');
}

export default function Blazera772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-pvp-enforced-server" />;
}
