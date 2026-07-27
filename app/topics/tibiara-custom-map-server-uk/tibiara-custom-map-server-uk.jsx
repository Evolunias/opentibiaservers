import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-uk');
}

export default function TibiaraCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-uk" />;
}
