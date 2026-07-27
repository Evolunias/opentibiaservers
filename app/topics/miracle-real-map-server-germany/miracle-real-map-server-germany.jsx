import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-germany');
}

export default function MiracleRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-germany" />;
}
