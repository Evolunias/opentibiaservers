import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-real-map-servers');
}

export default function Blazera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-real-map-servers" />;
}
