import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-mexico');
}

export default function EvoServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-mexico" />;
}
