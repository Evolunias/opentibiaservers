import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-sweden');
}

export default function ArchlightPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-sweden" />;
}
