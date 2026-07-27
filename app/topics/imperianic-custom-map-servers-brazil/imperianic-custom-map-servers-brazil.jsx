import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-brazil');
}

export default function ImperianicCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-brazil" />;
}
