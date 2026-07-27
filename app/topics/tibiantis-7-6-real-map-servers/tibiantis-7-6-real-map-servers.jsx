import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-real-map-servers');
}

export default function Tibiantis76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-real-map-servers" />;
}
