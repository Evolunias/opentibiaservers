import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-canada');
}

export default function DemolidoresCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-canada" />;
}
