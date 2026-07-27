import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-germany');
}

export default function ThaisotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-germany" />;
}
