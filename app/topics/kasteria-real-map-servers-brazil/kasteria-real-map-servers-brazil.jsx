import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-brazil');
}

export default function KasteriaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-brazil" />;
}
