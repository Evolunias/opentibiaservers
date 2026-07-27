import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-north-america');
}

export default function NilotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-north-america" />;
}
