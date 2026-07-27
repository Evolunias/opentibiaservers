import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-open-tibia');
}

export default function RealMapNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-open-tibia" />;
}
