import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-pvp-enforced-server');
}

export default function Archlight96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-pvp-enforced-server" />;
}
