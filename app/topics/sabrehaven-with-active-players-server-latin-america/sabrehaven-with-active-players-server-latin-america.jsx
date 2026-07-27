import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-latin-america');
}

export default function SabrehavenWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-latin-america" />;
}
