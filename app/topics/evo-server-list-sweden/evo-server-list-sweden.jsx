import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-sweden');
}

export default function EvoServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-sweden" />;
}
