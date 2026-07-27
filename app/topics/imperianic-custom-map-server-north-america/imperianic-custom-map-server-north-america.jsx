import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-north-america');
}

export default function ImperianicCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-north-america" />;
}
