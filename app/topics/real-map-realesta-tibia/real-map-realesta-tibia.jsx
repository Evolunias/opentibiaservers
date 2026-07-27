import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-tibia');
}

export default function RealMapRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-tibia" />;
}
