import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-server-latin-america');
}

export default function DemolidoresRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-server-latin-america" />;
}
