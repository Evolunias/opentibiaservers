import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-real-map-servers');
}

export default function Alastera96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-real-map-servers" />;
}
