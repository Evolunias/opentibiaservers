import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-real-map-servers');
}

export default function Kasteria14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-real-map-servers" />;
}
