import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-real-map-servers');
}

export default function Blazera71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-real-map-servers" />;
}
