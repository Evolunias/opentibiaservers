import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-canada');
}

export default function ImperianicCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-canada" />;
}
