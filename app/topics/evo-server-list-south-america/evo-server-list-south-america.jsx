import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-south-america');
}

export default function EvoServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-south-america" />;
}
