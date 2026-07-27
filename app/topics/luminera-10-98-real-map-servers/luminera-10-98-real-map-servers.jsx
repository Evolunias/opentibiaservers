import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-real-map-servers');
}

export default function Luminera1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-real-map-servers" />;
}
