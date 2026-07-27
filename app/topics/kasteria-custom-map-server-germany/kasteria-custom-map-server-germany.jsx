import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-germany');
}

export default function KasteriaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-germany" />;
}
