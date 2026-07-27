import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-real-map-servers');
}

export default function Nostalther12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-real-map-servers" />;
}
