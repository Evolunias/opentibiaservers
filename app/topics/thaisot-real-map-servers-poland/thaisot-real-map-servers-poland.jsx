import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-poland');
}

export default function ThaisotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-poland" />;
}
