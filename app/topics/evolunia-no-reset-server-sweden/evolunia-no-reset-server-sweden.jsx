import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-sweden');
}

export default function EvoluniaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-sweden" />;
}
