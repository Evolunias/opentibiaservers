import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-latin-america');
}

export default function ElderaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-latin-america" />;
}
