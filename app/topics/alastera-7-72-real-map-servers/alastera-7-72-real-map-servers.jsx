import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-real-map-servers');
}

export default function Alastera772RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-real-map-servers" />;
}
