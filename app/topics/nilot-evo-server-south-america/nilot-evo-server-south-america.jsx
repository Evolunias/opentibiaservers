import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-south-america');
}

export default function NilotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-south-america" />;
}
