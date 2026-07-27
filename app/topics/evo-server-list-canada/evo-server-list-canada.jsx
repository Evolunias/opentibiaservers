import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-canada');
}

export default function EvoServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-canada" />;
}
