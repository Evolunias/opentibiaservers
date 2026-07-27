import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-europe');
}

export default function OlderaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-europe" />;
}
