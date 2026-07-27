import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-europe');
}

export default function NepreniaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-europe" />;
}
