import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-north-america');
}

export default function ImperianicCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-north-america" />;
}
