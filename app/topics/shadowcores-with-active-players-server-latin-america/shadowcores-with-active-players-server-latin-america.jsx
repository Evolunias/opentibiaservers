import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-active-players-server-latin-america');
}

export default function ShadowcoresWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-active-players-server-latin-america" />;
}
