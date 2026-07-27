import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-real-map-servers');
}

export default function Nostalther15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-real-map-servers" />;
}
