import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-latin-america');
}

export default function MediviaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-latin-america" />;
}
