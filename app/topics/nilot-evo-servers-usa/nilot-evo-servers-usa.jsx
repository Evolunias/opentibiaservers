import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-servers-usa');
}

export default function NilotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-servers-usa" />;
}
