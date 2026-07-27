import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-germany');
}

export default function NilotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-germany" />;
}
