import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-open-tibia');
}

export default function RealMapAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-open-tibia" />;
}
