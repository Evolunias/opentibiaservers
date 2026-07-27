import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-private-server');
}

export default function NewSeasonTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-private-server" />;
}
