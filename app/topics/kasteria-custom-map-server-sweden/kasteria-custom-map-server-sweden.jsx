import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-sweden');
}

export default function KasteriaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-sweden" />;
}
