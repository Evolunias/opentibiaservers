import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-germany');
}

export default function ArchlightPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-germany" />;
}
