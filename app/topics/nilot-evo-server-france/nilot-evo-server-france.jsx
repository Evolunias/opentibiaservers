import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-france');
}

export default function NilotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-france" />;
}
