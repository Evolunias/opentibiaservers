import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-brazil');
}

export default function ImperianicRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-brazil" />;
}
