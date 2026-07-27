import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-open-tibia');
}

export default function RealMapDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-open-tibia" />;
}
