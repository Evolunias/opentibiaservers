import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-pvp-enforced-server');
}

export default function Realesta11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-pvp-enforced-server" />;
}
