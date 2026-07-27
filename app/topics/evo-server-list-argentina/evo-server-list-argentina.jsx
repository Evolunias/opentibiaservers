import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-argentina');
}

export default function EvoServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-argentina" />;
}
