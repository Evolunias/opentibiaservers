import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-real-map-servers');
}

export default function Tibianus12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-real-map-servers" />;
}
