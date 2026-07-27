import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map');
}

export default function DemolidoresRealMapKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map" />;
}
