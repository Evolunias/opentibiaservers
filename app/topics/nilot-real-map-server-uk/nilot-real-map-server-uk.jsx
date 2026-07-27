import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-uk');
}

export default function NilotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-uk" />;
}
