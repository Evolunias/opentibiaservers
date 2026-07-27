import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-demolidores-server');
}

export default function CustomMapDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-demolidores-server" />;
}
