import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-tibia');
}

export default function RealMapDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-tibia" />;
}
