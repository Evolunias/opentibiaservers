import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-usa');
}

export default function DemolidoresRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-usa" />;
}
