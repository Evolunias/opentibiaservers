import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-europe');
}

export default function NilotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-europe" />;
}
