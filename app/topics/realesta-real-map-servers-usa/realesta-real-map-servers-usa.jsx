import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-usa');
}

export default function RealestaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-usa" />;
}
