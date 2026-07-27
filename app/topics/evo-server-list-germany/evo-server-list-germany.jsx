import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-germany');
}

export default function EvoServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-germany" />;
}
