import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-open-tibia');
}

export default function RealMapKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-open-tibia" />;
}
