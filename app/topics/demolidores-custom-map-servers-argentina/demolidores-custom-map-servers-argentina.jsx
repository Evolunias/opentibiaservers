import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-argentina');
}

export default function DemolidoresCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-argentina" />;
}
