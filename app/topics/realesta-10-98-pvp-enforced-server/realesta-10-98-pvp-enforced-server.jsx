import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-pvp-enforced-server');
}

export default function Realesta1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-pvp-enforced-server" />;
}
