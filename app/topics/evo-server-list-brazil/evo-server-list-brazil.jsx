import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-brazil');
}

export default function EvoServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-brazil" />;
}
