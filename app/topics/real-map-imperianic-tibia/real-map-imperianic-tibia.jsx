import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-tibia');
}

export default function RealMapImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-tibia" />;
}
