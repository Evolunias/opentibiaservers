import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-poland');
}

export default function NilotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-poland" />;
}
