import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-real-map-servers');
}

export default function Tibiantis15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-real-map-servers" />;
}
