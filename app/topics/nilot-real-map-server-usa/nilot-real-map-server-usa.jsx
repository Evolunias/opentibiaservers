import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-usa');
}

export default function NilotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-usa" />;
}
