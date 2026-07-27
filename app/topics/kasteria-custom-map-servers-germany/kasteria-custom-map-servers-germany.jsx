import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-germany');
}

export default function KasteriaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-germany" />;
}
