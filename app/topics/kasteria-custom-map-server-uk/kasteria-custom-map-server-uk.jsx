import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-uk');
}

export default function KasteriaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-uk" />;
}
