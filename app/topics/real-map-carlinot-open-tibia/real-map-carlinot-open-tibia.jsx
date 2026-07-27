import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-open-tibia');
}

export default function RealMapCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-open-tibia" />;
}
