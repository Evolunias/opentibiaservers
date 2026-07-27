import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-real-map-server');
}

export default function Tibianus1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-real-map-server" />;
}
