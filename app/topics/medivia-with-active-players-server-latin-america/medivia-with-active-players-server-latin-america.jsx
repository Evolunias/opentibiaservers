import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-latin-america');
}

export default function MediviaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-latin-america" />;
}
