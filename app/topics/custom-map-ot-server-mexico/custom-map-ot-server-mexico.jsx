import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-mexico');
}

export default function CustomMapOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-mexico" />;
}
