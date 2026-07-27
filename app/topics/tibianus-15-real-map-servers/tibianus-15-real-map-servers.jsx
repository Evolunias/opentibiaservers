import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-real-map-servers');
}

export default function Tibianus15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-real-map-servers" />;
}
