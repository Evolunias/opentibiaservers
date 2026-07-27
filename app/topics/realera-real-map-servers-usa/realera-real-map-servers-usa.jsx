import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-usa');
}

export default function RealeraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-usa" />;
}
