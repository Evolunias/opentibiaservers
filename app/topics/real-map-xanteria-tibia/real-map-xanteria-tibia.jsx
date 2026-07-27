import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-tibia');
}

export default function RealMapXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-tibia" />;
}
