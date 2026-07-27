import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-usa');
}

export default function NilotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-usa" />;
}
