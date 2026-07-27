import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-private-server');
}

export default function NewSeasonNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-private-server" />;
}
