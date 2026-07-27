import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-brazil');
}

export default function ImperianicCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-brazil" />;
}
