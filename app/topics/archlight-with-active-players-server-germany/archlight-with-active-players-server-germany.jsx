import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-germany');
}

export default function ArchlightWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-germany" />;
}
