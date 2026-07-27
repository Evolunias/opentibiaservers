import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-brazil');
}

export default function NepreniaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-brazil" />;
}
