import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-latin-america');
}

export default function ArchlightWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-latin-america" />;
}
