import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-pvp-enforced-server');
}

export default function Blazera80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-pvp-enforced-server" />;
}
