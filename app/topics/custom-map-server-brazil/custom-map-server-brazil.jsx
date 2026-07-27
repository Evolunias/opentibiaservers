import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-brazil');
}

export default function CustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-brazil" />;
}
