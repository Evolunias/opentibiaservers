import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-argentina');
}

export default function ArchlightPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-argentina" />;
}
