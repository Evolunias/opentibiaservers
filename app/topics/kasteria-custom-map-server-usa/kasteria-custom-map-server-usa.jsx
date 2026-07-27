import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-usa');
}

export default function KasteriaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-usa" />;
}
