import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-argentina');
}

export default function KasteriaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-argentina" />;
}
