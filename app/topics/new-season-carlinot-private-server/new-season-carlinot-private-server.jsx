import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-private-server');
}

export default function NewSeasonCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-private-server" />;
}
