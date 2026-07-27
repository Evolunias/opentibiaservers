import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-canada');
}

export default function DemolidoresRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-canada" />;
}
