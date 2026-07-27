import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-usa');
}

export default function KasteriaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-usa" />;
}
