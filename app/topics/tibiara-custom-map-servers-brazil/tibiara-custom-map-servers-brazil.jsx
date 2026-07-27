import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-brazil');
}

export default function TibiaraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-brazil" />;
}
