import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-latin-america');
}

export default function NilotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-latin-america" />;
}
