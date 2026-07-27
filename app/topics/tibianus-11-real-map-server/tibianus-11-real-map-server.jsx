import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-real-map-server');
}

export default function Tibianus11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-real-map-server" />;
}
