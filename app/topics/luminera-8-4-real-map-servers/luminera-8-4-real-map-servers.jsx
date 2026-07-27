import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-real-map-servers');
}

export default function Luminera84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-real-map-servers" />;
}
