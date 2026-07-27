import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-mexico');
}

export default function MiracleRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-mexico" />;
}
