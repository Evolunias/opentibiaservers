import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-pvp-enforced-server');
}

export default function Archlight74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-pvp-enforced-server" />;
}
