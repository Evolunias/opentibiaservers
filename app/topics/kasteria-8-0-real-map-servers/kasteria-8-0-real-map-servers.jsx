import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-real-map-servers');
}

export default function Kasteria80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-real-map-servers" />;
}
