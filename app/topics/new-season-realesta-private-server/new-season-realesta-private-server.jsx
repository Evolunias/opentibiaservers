import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-private-server');
}

export default function NewSeasonRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-private-server" />;
}
