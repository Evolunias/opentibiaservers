import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map');
}

export default function TibiaraRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map" />;
}
