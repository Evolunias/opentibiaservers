import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-uk');
}

export default function NepreniaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-uk" />;
}
