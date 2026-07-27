import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-real-map-servers');
}

export default function Blazera11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-real-map-servers" />;
}
