import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-tibia');
}

export default function RealMapOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-tibia" />;
}
