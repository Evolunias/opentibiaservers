import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-pvp-enforced-server');
}

export default function Realesta100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-pvp-enforced-server" />;
}
