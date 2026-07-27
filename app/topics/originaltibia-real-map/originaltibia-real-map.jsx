import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map');
}

export default function OriginaltibiaRealMapKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map" />;
}
