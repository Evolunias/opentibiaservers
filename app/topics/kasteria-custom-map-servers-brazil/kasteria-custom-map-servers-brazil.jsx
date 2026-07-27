import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-brazil');
}

export default function KasteriaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-brazil" />;
}
