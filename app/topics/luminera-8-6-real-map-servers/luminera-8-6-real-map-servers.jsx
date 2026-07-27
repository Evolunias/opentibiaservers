import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-real-map-servers');
}

export default function Luminera86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-real-map-servers" />;
}
