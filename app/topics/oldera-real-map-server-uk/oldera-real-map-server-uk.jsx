import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-uk');
}

export default function OlderaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-uk" />;
}
