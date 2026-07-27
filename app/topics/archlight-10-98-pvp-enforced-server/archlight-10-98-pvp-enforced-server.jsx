import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-pvp-enforced-server');
}

export default function Archlight1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-pvp-enforced-server" />;
}
