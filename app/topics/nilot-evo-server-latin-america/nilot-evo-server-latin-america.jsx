import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-latin-america');
}

export default function NilotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-latin-america" />;
}
