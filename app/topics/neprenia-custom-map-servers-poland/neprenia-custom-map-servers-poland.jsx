import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-poland');
}

export default function NepreniaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-poland" />;
}
