import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-usa');
}

export default function TibiaraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-usa" />;
}
