import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-europe');
}

export default function OlderaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-europe" />;
}
