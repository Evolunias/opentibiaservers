import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-latin-america');
}

export default function NostaltherEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-latin-america" />;
}
