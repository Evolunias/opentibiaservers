import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-mexico');
}

export default function NilotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-mexico" />;
}
