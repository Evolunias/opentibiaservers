import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-brazil');
}

export default function CustomMapOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-brazil" />;
}
