import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-poland');
}

export default function NilotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-poland" />;
}
