import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-tibia');
}

export default function RealMapUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-tibia" />;
}
