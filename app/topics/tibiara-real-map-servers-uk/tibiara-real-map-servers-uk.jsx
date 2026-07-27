import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-uk');
}

export default function TibiaraRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-uk" />;
}
