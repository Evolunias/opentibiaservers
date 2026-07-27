import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-sweden');
}

export default function BaiakIlusionRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-sweden" />;
}
