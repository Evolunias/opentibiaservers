import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-mexico');
}

export default function DemolidoresCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-mexico" />;
}
