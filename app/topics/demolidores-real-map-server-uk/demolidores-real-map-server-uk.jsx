import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-uk');
}

export default function DemolidoresRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-uk" />;
}
