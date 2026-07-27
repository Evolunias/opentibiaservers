import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-trashformers-server');
}

export default function WithActivePlayersTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-trashformers-server" />;
}
