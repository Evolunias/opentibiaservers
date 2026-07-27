import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-europe');
}

export default function DemolidoresRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-europe" />;
}
