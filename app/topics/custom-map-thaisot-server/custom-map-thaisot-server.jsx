import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-thaisot-server');
}

export default function CustomMapThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-thaisot-server" />;
}
