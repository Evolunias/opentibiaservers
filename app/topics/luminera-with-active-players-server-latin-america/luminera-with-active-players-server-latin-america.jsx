import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-latin-america');
}

export default function LumineraWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-latin-america" />;
}
