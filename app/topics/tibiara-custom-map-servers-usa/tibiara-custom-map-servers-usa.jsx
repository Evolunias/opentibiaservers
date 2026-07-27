import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-usa');
}

export default function TibiaraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-usa" />;
}
