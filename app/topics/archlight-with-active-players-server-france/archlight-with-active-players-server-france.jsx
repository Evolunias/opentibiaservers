import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-france');
}

export default function ArchlightWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-france" />;
}
