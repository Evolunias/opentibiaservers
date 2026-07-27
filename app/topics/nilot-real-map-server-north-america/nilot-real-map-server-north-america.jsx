import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-north-america');
}

export default function NilotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-north-america" />;
}
