import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-latin-america');
}

export default function TibianusWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-latin-america" />;
}
