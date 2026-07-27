import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-servers-brazil');
}

export default function NilotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-servers-brazil" />;
}
