import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-sweden');
}

export default function ArchlightPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-sweden" />;
}
