import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-latin-america');
}

export default function OlderaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-latin-america" />;
}
