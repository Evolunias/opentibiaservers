import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-sweden');
}

export default function EvoluniaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-sweden" />;
}
