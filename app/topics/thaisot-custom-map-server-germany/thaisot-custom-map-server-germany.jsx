import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-germany');
}

export default function ThaisotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-germany" />;
}
