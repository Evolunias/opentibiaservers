import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-real-map-servers');
}

export default function Tibiantis13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-real-map-servers" />;
}
