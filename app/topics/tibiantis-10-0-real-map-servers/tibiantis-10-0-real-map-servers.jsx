import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-real-map-servers');
}

export default function Tibiantis100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-real-map-servers" />;
}
