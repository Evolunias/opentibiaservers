import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-real-map-server');
}

export default function Tibianus14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-real-map-server" />;
}
