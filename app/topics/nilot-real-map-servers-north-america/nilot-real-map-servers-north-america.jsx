import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-north-america');
}

export default function NilotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-north-america" />;
}
