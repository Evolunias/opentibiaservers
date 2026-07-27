import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-canada');
}

export default function NilotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-canada" />;
}
