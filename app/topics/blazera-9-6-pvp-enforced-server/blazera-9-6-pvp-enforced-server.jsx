import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-pvp-enforced-server');
}

export default function Blazera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-pvp-enforced-server" />;
}
