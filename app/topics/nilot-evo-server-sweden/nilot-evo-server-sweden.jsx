import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-sweden');
}

export default function NilotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-sweden" />;
}
