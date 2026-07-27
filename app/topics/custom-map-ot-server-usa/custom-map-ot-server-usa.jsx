import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-usa');
}

export default function CustomMapOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-usa" />;
}
