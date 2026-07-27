import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-usa');
}

export default function ThorniaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-usa" />;
}
