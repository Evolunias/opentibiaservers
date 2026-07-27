import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-active-players-server-north-america');
}

export default function ArchlightWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-active-players-server-north-america" />;
}
