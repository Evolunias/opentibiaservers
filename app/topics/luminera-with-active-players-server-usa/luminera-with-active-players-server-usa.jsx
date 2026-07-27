import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-usa');
}

export default function LumineraWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-usa" />;
}
