import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-argentina');
}

export default function ArchlightWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-argentina" />;
}
