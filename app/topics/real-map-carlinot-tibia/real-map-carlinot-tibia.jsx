import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-tibia');
}

export default function RealMapCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-tibia" />;
}
