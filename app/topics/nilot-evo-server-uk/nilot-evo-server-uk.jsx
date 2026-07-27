import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-uk');
}

export default function NilotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-uk" />;
}
