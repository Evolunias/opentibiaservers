import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-real-map-servers');
}

export default function Luminera15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-real-map-servers" />;
}
