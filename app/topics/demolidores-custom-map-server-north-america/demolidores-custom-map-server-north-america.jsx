import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-north-america');
}

export default function DemolidoresCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-north-america" />;
}
