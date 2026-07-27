import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-real-map-servers');
}

export default function Tibiantis96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-real-map-servers" />;
}
