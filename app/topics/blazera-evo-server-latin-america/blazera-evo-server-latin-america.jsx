import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-latin-america');
}

export default function BlazeraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-latin-america" />;
}
