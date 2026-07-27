import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-real-map-server');
}

export default function Tibianus74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-real-map-server" />;
}
