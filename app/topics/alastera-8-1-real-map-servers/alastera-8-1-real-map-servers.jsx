import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-real-map-servers');
}

export default function Alastera81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-real-map-servers" />;
}
