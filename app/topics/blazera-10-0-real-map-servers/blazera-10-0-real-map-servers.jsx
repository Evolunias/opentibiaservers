import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-real-map-servers');
}

export default function Blazera100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-real-map-servers" />;
}
