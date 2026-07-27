import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-sweden');
}

export default function ArchlightWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-sweden" />;
}
