import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-europe');
}

export default function ArchlightWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-europe" />;
}
