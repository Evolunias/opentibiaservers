import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-europe');
}

export default function NepreniaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-europe" />;
}
