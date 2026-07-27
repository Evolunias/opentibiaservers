import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-brazil');
}

export default function NilotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-brazil" />;
}
