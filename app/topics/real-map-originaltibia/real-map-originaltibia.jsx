import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia');
}

export default function RealMapOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia" />;
}
