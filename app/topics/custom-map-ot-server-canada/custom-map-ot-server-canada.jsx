import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-canada');
}

export default function CustomMapOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-canada" />;
}
