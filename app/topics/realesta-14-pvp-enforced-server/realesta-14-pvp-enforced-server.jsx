import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-pvp-enforced-server');
}

export default function Realesta14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-pvp-enforced-server" />;
}
