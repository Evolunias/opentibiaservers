import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-poland');
}

export default function OlderaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-poland" />;
}
