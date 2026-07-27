import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-uk');
}

export default function DemolidoresRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-uk" />;
}
