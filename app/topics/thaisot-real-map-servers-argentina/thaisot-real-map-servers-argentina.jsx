import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-argentina');
}

export default function ThaisotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-argentina" />;
}
