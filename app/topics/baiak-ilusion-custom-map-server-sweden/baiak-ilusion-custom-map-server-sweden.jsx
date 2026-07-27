import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-sweden');
}

export default function BaiakIlusionCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-sweden" />;
}
