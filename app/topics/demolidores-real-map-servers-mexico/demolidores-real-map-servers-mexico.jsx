import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-mexico');
}

export default function DemolidoresRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-mexico" />;
}
