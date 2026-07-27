import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-tibia');
}

export default function RealMapRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-tibia" />;
}
