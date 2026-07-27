import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-germany');
}

export default function TibiaraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-germany" />;
}
