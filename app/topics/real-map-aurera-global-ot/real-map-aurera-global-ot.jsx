import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-ot');
}

export default function RealMapAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-ot" />;
}
