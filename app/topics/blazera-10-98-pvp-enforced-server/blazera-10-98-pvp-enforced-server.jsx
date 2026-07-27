import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-pvp-enforced-server');
}

export default function Blazera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-pvp-enforced-server" />;
}
