import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-real-map-servers');
}

export default function Alastera84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-real-map-servers" />;
}
