import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-north-america');
}

export default function CustomMapOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-north-america" />;
}
