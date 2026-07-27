import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-canada');
}

export default function DemolidoresRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-canada" />;
}
