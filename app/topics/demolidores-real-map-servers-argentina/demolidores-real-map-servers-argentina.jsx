import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-argentina');
}

export default function DemolidoresRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-argentina" />;
}
