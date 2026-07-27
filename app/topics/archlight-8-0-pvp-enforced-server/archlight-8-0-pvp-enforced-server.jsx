import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-pvp-enforced-server');
}

export default function Archlight80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-pvp-enforced-server" />;
}
