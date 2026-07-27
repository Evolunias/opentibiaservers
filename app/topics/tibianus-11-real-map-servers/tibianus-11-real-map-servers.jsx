import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-real-map-servers');
}

export default function Tibianus11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-real-map-servers" />;
}
