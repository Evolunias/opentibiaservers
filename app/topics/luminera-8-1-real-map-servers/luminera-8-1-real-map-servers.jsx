import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-real-map-servers');
}

export default function Luminera81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-real-map-servers" />;
}
