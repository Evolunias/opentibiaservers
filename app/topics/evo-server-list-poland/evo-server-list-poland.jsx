import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-poland');
}

export default function EvoServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-poland" />;
}
