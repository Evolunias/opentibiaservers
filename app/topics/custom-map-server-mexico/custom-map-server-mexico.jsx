import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-mexico');
}

export default function CustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-mexico" />;
}
