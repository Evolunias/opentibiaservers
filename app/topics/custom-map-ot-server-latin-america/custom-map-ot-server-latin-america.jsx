import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-latin-america');
}

export default function CustomMapOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-latin-america" />;
}
