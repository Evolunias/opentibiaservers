import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-tibia');
}

export default function RealMapAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-tibia" />;
}
