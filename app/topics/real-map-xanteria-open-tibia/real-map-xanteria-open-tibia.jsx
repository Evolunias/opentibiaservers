import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-open-tibia');
}

export default function RealMapXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-open-tibia" />;
}
