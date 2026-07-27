import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-europe');
}

export default function NilotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-europe" />;
}
