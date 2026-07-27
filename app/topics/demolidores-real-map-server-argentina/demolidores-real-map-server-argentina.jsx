import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-argentina');
}

export default function DemolidoresRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-argentina" />;
}
