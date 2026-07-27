import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-brazil');
}

export default function TibiaraCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-brazil" />;
}
