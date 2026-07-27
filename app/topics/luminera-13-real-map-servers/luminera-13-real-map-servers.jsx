import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-real-map-servers');
}

export default function Luminera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-real-map-servers" />;
}
