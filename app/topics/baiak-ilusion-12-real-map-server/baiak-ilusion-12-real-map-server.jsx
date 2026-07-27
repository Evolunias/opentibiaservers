import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-real-map-server');
}

export default function BaiakIlusion12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-real-map-server" />;
}
