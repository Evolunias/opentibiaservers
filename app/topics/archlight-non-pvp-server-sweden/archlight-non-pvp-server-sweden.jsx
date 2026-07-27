import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-sweden');
}

export default function ArchlightNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-sweden" />;
}
