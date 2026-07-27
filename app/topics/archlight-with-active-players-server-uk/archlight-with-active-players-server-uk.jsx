import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-uk');
}

export default function ArchlightWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-uk" />;
}
