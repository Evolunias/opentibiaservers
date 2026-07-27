import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-active-players-server-latin-america');
}

export default function CyntaraWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-active-players-server-latin-america" />;
}
