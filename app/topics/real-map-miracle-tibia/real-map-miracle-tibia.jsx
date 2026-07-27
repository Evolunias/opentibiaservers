import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-tibia');
}

export default function RealMapMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-tibia" />;
}
