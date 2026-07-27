import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-mexico');
}

export default function ThaisotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-mexico" />;
}
