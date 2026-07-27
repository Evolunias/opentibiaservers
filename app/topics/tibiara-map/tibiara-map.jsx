import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-map');
}

export default function TibiaraMapKeywordPage() {
  return <StaticKeywordPage slug="tibiara-map" />;
}
