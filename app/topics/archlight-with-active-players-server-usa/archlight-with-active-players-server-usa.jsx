import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-usa');
}

export default function ArchlightWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-usa" />;
}
