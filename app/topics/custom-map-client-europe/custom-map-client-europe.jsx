import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-europe');
}

export default function CustomMapClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-europe" />;
}
