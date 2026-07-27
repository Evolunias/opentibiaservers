import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-real-map-servers');
}

export default function Luminera100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-real-map-servers" />;
}
