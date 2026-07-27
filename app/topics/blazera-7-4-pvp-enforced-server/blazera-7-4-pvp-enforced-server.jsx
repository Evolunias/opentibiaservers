import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-pvp-enforced-server');
}

export default function Blazera74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-pvp-enforced-server" />;
}
