import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-real-map-servers');
}

export default function Tibiantis11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-real-map-servers" />;
}
