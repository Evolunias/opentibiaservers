import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-pvp-enforced-server');
}

export default function Archlight12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-pvp-enforced-server" />;
}
