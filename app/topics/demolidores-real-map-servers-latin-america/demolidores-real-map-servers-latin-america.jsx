import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-latin-america');
}

export default function DemolidoresRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-latin-america" />;
}
