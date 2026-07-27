import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-real-map-servers');
}

export default function Alastera15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-real-map-servers" />;
}
