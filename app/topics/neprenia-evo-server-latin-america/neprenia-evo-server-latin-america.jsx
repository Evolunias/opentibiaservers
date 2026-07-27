import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-latin-america');
}

export default function NepreniaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-latin-america" />;
}
