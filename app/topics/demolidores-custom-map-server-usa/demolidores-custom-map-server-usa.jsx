import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-usa');
}

export default function DemolidoresCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-usa" />;
}
