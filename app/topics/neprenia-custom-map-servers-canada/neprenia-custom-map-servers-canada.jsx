import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-canada');
}

export default function NepreniaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-canada" />;
}
