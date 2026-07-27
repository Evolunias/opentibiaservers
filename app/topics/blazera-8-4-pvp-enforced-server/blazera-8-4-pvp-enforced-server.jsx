import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-pvp-enforced-server');
}

export default function Blazera84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-pvp-enforced-server" />;
}
