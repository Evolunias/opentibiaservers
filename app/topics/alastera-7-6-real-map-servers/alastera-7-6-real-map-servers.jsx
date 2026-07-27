import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-real-map-servers');
}

export default function Alastera76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-real-map-servers" />;
}
