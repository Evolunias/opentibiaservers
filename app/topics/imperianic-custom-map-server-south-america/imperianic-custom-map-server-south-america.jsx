import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-south-america');
}

export default function ImperianicCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-south-america" />;
}
