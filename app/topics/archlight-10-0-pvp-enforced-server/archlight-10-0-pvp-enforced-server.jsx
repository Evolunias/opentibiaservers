import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-pvp-enforced-server');
}

export default function Archlight100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-pvp-enforced-server" />;
}
