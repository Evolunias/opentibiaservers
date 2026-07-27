import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-north-america');
}

export default function EvoServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-north-america" />;
}
