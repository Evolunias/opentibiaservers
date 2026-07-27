import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-uk');
}

export default function TibiaraCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-uk" />;
}
