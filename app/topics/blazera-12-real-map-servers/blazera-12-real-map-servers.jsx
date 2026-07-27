import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-real-map-servers');
}

export default function Blazera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-real-map-servers" />;
}
