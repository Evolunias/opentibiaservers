import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-argentina');
}

export default function TibiaraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-argentina" />;
}
