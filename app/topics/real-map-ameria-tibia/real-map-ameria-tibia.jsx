import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-tibia');
}

export default function RealMapAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-tibia" />;
}
