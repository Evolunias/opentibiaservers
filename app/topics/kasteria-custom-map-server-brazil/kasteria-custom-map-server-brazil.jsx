import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-brazil');
}

export default function KasteriaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-brazil" />;
}
