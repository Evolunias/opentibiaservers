import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-servers-poland');
}

export default function CalmeraOtRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-servers-poland" />;
}
