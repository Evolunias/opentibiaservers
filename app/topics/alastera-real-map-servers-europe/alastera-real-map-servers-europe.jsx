import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-europe');
}

export default function AlasteraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-europe" />;
}
