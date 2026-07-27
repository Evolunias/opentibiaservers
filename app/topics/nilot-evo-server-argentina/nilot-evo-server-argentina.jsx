import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-argentina');
}

export default function NilotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-argentina" />;
}
