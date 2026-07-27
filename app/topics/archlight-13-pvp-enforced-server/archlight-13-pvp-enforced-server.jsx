import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-pvp-enforced-server');
}

export default function Archlight13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-pvp-enforced-server" />;
}
