import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-pvp-enforced-server');
}

export default function Realesta80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-pvp-enforced-server" />;
}
