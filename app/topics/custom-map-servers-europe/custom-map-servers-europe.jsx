import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-europe');
}

export default function CustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-europe" />;
}
