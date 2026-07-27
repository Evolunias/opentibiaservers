import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-poland');
}

export default function LumineraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-poland" />;
}
