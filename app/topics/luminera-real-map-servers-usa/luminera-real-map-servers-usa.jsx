import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-usa');
}

export default function LumineraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-usa" />;
}
