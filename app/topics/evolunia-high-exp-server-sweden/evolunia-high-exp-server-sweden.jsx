import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-sweden');
}

export default function EvoluniaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-sweden" />;
}
