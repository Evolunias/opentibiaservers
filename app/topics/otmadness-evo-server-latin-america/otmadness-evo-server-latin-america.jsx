import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-latin-america');
}

export default function OtmadnessEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-latin-america" />;
}
