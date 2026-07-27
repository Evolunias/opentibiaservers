import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-sweden');
}

export default function EvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-server-sweden" />;
}
