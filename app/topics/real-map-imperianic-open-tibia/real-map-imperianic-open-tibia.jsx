import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-open-tibia');
}

export default function RealMapImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-open-tibia" />;
}
