import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-usa');
}

export default function DemolidoresRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-usa" />;
}
