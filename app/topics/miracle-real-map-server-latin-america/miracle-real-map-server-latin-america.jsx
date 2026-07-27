import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-latin-america');
}

export default function MiracleRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-latin-america" />;
}
