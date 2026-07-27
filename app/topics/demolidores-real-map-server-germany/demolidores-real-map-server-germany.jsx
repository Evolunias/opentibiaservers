import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-germany');
}

export default function DemolidoresRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-germany" />;
}
