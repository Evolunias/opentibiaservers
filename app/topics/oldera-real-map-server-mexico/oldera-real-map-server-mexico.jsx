import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-mexico');
}

export default function OlderaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-mexico" />;
}
