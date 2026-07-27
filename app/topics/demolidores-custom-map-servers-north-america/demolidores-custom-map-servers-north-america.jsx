import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-north-america');
}

export default function DemolidoresCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-north-america" />;
}
