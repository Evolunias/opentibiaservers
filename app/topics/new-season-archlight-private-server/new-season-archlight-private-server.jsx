import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-private-server');
}

export default function NewSeasonArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-private-server" />;
}
