import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-real-map-servers');
}

export default function Alastera11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-real-map-servers" />;
}
