import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-usa');
}

export default function CustomMapClientUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-usa" />;
}
