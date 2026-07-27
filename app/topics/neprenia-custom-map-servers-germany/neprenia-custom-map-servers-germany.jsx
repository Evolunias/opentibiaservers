import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-germany');
}

export default function NepreniaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-germany" />;
}
