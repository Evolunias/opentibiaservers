import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-mexico');
}

export default function NilotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-mexico" />;
}
