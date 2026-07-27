import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-europe');
}

export default function TibiaraCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-europe" />;
}
