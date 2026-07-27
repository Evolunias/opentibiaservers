import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-latin-america');
}

export default function MadnessaliveEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-latin-america" />;
}
