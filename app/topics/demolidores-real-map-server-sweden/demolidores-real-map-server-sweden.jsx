import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-sweden');
}

export default function DemolidoresRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-sweden" />;
}
