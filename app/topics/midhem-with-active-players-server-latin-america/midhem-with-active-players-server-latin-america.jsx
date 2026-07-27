import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-latin-america');
}

export default function MidhemWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-latin-america" />;
}
