import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-private-server');
}

export default function NewSeasonRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-private-server" />;
}
