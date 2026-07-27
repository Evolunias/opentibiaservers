import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-latin-america');
}

export default function OlderaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-latin-america" />;
}
