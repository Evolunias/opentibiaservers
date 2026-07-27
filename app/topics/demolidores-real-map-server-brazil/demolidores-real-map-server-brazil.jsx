import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-brazil');
}

export default function DemolidoresRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-brazil" />;
}
