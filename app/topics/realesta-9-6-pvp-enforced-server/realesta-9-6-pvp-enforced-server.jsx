import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-pvp-enforced-server');
}

export default function Realesta96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-pvp-enforced-server" />;
}
