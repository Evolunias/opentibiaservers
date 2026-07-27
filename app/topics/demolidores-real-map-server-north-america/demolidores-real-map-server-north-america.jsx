import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-north-america');
}

export default function DemolidoresRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-north-america" />;
}
