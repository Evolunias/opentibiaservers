import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-europe');
}

export default function NilotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-europe" />;
}
