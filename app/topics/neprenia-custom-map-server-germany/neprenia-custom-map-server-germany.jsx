import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-germany');
}

export default function NepreniaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-germany" />;
}
