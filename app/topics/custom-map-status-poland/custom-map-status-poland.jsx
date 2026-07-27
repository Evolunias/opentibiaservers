import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-poland');
}

export default function CustomMapStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-poland" />;
}
