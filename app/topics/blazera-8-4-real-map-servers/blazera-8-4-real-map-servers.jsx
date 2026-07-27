import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-real-map-servers');
}

export default function Blazera84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-real-map-servers" />;
}
