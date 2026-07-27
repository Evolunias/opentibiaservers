import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-canada');
}

export default function ImperianicCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-canada" />;
}
