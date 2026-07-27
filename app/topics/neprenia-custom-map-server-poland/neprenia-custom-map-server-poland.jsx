import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-poland');
}

export default function NepreniaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-poland" />;
}
