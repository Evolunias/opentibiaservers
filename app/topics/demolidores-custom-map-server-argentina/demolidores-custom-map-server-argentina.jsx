import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-server-argentina');
}

export default function DemolidoresCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-server-argentina" />;
}
