import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-real-map');
}

export default function EvoServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="evo-server-real-map" />;
}
