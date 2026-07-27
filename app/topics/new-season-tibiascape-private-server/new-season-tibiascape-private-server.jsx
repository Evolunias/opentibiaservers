import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-private-server');
}

export default function NewSeasonTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-private-server" />;
}
