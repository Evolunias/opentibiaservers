import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-tibia');
}

export default function RealMapRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-tibia" />;
}
