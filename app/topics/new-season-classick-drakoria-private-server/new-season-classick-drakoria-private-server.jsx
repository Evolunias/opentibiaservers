import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-private-server');
}

export default function NewSeasonClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-private-server" />;
}
