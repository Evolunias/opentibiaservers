import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-sabrehaven-server');
}

export default function CustomMapSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-sabrehaven-server" />;
}
