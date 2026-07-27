import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-mexico');
}

export default function CustomMapClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-mexico" />;
}
