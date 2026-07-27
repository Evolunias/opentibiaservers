import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-latin-america');
}

export default function LumineraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-latin-america" />;
}
