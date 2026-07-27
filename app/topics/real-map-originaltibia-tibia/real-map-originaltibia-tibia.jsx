import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-tibia');
}

export default function RealMapOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-tibia" />;
}
