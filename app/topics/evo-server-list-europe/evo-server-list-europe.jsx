import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-europe');
}

export default function EvoServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-europe" />;
}
