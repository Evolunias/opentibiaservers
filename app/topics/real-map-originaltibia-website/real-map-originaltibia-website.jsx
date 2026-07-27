import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-website');
}

export default function RealMapOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-website" />;
}
