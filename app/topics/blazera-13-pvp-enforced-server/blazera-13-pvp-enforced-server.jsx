import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-pvp-enforced-server');
}

export default function Blazera13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-pvp-enforced-server" />;
}
