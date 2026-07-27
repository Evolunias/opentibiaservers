import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-sweden');
}

export default function UnlineEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-sweden" />;
}
