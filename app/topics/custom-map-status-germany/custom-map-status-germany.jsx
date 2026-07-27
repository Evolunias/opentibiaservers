import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-germany');
}

export default function CustomMapStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-germany" />;
}
