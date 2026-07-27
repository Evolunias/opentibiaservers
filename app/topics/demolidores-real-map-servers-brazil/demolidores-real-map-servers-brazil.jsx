import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-brazil');
}

export default function DemolidoresRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-brazil" />;
}
