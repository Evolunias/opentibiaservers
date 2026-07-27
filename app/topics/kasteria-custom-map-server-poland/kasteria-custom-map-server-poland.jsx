import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-poland');
}

export default function KasteriaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-poland" />;
}
