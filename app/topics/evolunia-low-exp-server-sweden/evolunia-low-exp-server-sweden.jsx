import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-sweden');
}

export default function EvoluniaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-sweden" />;
}
