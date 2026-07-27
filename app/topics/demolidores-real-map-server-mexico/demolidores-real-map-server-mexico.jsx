import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-mexico');
}

export default function DemolidoresRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-mexico" />;
}
