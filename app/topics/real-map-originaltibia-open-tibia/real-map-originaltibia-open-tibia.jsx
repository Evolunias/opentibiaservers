import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-open-tibia');
}

export default function RealMapOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-open-tibia" />;
}
