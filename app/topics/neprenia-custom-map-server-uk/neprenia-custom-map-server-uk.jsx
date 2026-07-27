import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-uk');
}

export default function NepreniaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-uk" />;
}
