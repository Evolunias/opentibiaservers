import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-status');
}

export default function CalmeraOtStatusKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-status" />;
}
