import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-north-america');
}

export default function DemolidoresRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-north-america" />;
}
