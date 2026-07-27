import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-mexico');
}

export default function KasteriaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-mexico" />;
}
