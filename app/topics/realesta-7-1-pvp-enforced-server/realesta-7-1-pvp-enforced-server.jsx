import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-pvp-enforced-server');
}

export default function Realesta71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-pvp-enforced-server" />;
}
