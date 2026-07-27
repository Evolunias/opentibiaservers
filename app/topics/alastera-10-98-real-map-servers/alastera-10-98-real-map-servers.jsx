import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-real-map-servers');
}

export default function Alastera1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-real-map-servers" />;
}
