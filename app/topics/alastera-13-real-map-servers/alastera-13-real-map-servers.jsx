import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-real-map-servers');
}

export default function Alastera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-real-map-servers" />;
}
