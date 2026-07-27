import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-map');
}

export default function CalmeraOtMapKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-map" />;
}
