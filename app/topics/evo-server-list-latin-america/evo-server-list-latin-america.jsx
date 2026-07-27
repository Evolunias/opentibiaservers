import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-latin-america');
}

export default function EvoServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-latin-america" />;
}
