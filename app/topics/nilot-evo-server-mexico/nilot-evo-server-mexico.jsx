import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-mexico');
}

export default function NilotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-mexico" />;
}
