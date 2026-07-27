import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-usa');
}

export default function NilotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-usa" />;
}
