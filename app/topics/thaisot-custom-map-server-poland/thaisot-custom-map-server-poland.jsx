import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-poland');
}

export default function ThaisotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-poland" />;
}
