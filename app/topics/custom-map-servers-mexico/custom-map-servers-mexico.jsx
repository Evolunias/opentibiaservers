import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-mexico');
}

export default function CustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-mexico" />;
}
