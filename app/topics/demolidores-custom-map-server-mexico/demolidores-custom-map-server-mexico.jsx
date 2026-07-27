import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-mexico');
}

export default function DemolidoresCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-mexico" />;
}
