import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-canada');
}

export default function DemolidoresCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-canada" />;
}
