import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-uk');
}

export default function EvoServerListUkKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-uk" />;
}
