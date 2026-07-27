import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-open-tibia');
}

export default function RealMapTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-open-tibia" />;
}
