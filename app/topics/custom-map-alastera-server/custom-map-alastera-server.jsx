import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-alastera-server');
}

export default function CustomMapAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-alastera-server" />;
}
