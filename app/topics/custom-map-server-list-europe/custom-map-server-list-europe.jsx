import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-europe');
}

export default function CustomMapServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-europe" />;
}
