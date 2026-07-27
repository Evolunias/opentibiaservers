import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-tibia');
}

export default function RealMapAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-tibia" />;
}
