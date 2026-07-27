import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-pvp-enforced-server');
}

export default function Realesta12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-pvp-enforced-server" />;
}
