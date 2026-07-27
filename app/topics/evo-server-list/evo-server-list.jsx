import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list');
}

export default function EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list" />;
}
