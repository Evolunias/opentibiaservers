import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-canada');
}

export default function NepreniaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-canada" />;
}
