import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-pvp-enforced-server');
}

export default function Archlight15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-pvp-enforced-server" />;
}
