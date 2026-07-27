import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-real-map-servers');
}

export default function Tibianus80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-real-map-servers" />;
}
