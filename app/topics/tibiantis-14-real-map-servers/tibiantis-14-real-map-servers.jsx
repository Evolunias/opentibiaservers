import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-real-map-servers');
}

export default function Tibiantis14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-real-map-servers" />;
}
