import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-mexico');
}

export default function OlderaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-mexico" />;
}
