import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-real-map-servers');
}

export default function Tibiantis12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-real-map-servers" />;
}
