import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-latin-america');
}

export default function RealeraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-latin-america" />;
}
