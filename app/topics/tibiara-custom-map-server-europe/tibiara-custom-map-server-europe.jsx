import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-europe');
}

export default function TibiaraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-europe" />;
}
