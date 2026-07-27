import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-private-server');
}

export default function NewSeasonThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-private-server" />;
}
