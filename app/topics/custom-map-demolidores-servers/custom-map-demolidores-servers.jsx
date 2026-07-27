import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-demolidores-servers');
}

export default function CustomMapDemolidoresServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-demolidores-servers" />;
}
