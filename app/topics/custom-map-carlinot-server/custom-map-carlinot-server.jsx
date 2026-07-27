import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-carlinot-server');
}

export default function CustomMapCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-carlinot-server" />;
}
