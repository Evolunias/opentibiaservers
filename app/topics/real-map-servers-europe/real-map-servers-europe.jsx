import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-europe');
}

export default function RealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-europe" />;
}
