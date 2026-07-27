import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-brazil');
}

export default function DemolidoresCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-brazil" />;
}
