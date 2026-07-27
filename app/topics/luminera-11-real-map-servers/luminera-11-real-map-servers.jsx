import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-real-map-servers');
}

export default function Luminera11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-real-map-servers" />;
}
