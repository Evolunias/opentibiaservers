import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-latin-america');
}

export default function NilotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-latin-america" />;
}
